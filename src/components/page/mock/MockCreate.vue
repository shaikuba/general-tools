<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> Job
                </el-breadcrumb-item>
                <el-breadcrumb-item>Job List</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="Name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Type">
                        <el-select v-model="form.type" placeholder="Select One">
                            <el-option key="CMD" label="CMD" value="CMD"></el-option>
                            <el-option key="Test" label="Test" value="Test"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Location" v-if="displayCmd">
                        <el-checkbox-group v-model="form.platform" :min="0" :max="1">
                            <el-checkbox
                                v-for="osOpt in osOptions"
                                :label="osOpt"
                                :key="osOpt"
                                v-bind:style="{'margin-bottom': 20 + 'px'}"
                            >{{osOpt}}</el-checkbox>
                        </el-checkbox-group>
                        <el-input
                            v-model="form.ip"
                            v-bind:style="{'margin-bottom': 20 + 'px'}"
                            placeholder="Ip address"
                        ></el-input>
                        <el-input
                            v-model="form.url"
                            placeholder="The absolute path of executable file in the server."
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="Run Now">
                        <el-switch v-model="form.instant"></el-switch>
                    </el-form-item>
                    <el-form-item label="Scheduled" v-if="!form.instant">
                        <el-date-picker
                            v-model="form.scheduleTime"
                            type="datetime"
                            placeholder="Select date and time"
                        ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="Privacy">
                        <el-radio-group v-model="form.privacy">
                            <el-radio label="Private"></el-radio>
                            <el-radio label="Public"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Description">
                        <el-input type="textarea" rows="5" v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Submit</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { createJob } from '../../../api/job';

const osOptions = ['Windows', 'Windows-7', 'Windows-10', 'Linux'];
var vm = {
    name: 'jobCreate',
    data() {
        return {
            osOptions: osOptions,
            form: {
                name: '',
                type: 'CMD',
                platform: ['Windows'],
                ip: '',
                url: '',
                instant: false,
                scheduleTime: new Date().getTime(),
                privacy: 'Public',
                description: ''
            }
        };
    },
    methods: {
        onSubmit() {
            let newJob = JSON.parse(JSON.stringify(this.form));
            newJob.platform = this.form.platform[0];
            newJob.type = this.form.type == 'CMD' ? 1 : 2
            if(this.form.instant) {
                newJob.instant = 1;
                newJob.scheduletime = new Date();
            } else {
                newJob.instant = 0;
            }

            createJob(newJob).then(res => {
                if(res.code == 1) {
                    this.$message.success(res.message);
                } else {
                }
            });
        }
    },
    computed: {
        displayCmd: function() {
            if (this.form.type == 'CMD') {
                return true;
            }
            return false;
        }
    }
};

export default vm;
</script>