<template>
    <div>
        <div v-show="isNew" class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> Mock
                </el-breadcrumb-item>
                <el-breadcrumb-item>Mock Create</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :rules="rules" :model="form" label-width="120px">
                    <el-divider content-position="left">Request Configuration:</el-divider>

                    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); padding: 15px 15px 15px 15px">

                        <el-form-item label="Url" prop="requestUrl" >
                            <el-input v-model="form.requestUrl" placeholder="/path/to/api" :disabled="!isNew"></el-input>
                        </el-form-item>

                        <el-form-item label="Method" prop="requestMethod">
                            <el-select v-model="form.requestMethod" placeholder="Select One" :disabled="!isNew">
                                <el-option v-for="(method, index) in methods" :key="index" :label="method"
                                           :value="method"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="QueryString" v-show="usingQueryString">
                            <el-input v-model="form.queryString" placeholder="name1=value1&name2=value2"></el-input>
                        </el-form-item>

                        <el-form-item label="FormData" v-show="usingForm">
                            <el-input v-model="form.formData" placeholder="name1=value1&name2=value2"></el-input>
                        </el-form-item>

                        <el-form-item label="Headers">
                            <el-input type="textarea" rows="3" v-model="form.requestHeaders"></el-input>
                        </el-form-item>

                        <el-form-item label="RequestBody">
                            <el-input type="textarea" rows="3" v-model="form.requestBody"></el-input>
                        </el-form-item>

                    </div>

                    <div style="margin-bottom: 50px"/>
                    <el-divider content-position="left">Response Configuration:</el-divider>

                    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); padding: 15px 15px 15px 15px">
                        <el-form-item label="StatusCode" prop="statusCode">
                            <el-input v-model="form.statusCode"></el-input>
                        </el-form-item>

                        <el-form-item label="Headers">
                            <el-input type="textarea" rows="3" v-model="form.responseHeaders"></el-input>
                        </el-form-item>

                        <el-form-item label="ContentType" prop="contentType">
                            <el-input v-model="form.contentType"></el-input>
                        </el-form-item>

                        <el-form-item label="ResponseBody" prop="responseBody">
                            <el-input type="textarea" rows="3" v-model="form.responseBody"></el-input>
                        </el-form-item>

                        <el-form-item label="Description" prop="description">
                            <el-input type="textarea" rows="5" v-model="form.description"></el-input>
                        </el-form-item>

                    </div>
                    <el-form-item style="margin-top: 20px">
                        <el-button type="primary" @click="onSubmit" style="margin-right: 50px">Submit</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {createMock} from '../../../api/mock';

    const methods = ['GET', 'POST', 'PUT', 'DELETE'];
    const formDefault = function () {
        return {
            // params for request
            requestUrl: '',
            requestMethod: 'GET',
            queryString: '',
            formData: '',
            requestHeaders: "",
            requestBody: "",
            // params for response
            statusCode: 200,
            responseHeaders: "",
            responseBody: "",
            contentType: 'application/json;charset=utf8',
            description: ''
        }
    };

    let vm = {
        name: 'mockCreate',
        props: {
            form: {
                type: Object,
                required: false,
                default: formDefault
            },
            isNew: {
                type: Boolean,
                default: true,
                required: false
            }
        },
        data() {
            return {
                methods: methods,
                //form: formDefault,
                rules: {
                    requestUrl: [
                        {required: true, message: 'Please input request url', trigger: 'blur'}
                    ],
                    requestMethod: [
                        {required: true, message: 'Please select request method', trigger: 'blur'}
                    ],
                    statusCode: [
                        {required: true, message: 'Please input return status code', trigger: 'blur'},
                        {min: 3, max: 3, message: 'Length should be equal to 3!', trigger: 'change'}
                    ],
                    contentType: [
                        {required: true, message: 'Please input return content type', trigger: 'change'}
                    ],
                    responseBody: [
                        {required: true, message: 'Please input response body for this mock request', trigger: 'blur'},
                        {min: 1, max: 2048, message: 'ResponseBody\'s max length should be 2048', trigger: 'blur'}
                    ],
                    description: [
                        {min: 0, max: 99, message: 'Description\'s max length should be 99', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            onSubmit() {
                let newMock = JSON.stringify(this.form);

                createMock(newMock).then(res => {
                    if (res.code == '0000') {
                        this.$message.success(res.message);
                    } else {
                        this.$message.error(res.message)
                    }
                });

                if (!this.isNew) {
                    this.$emit("close-dialog")
                }
            }

        },
        computed: {
            usingQueryString: function () {
                return this.form.requestMethod == 'GET' || this.form.requestMethod == 'DELETE';
            },
            usingForm: function () {
                return this.form.requestMethod == 'GET' || this.form.requestMethod == 'POST';
            }
        }
    };

    export default vm;
</script>