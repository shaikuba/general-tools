<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-redpacket_fill"></i>证书下载</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">

            <div v-for="(cert, index) in certFiles" style="margin-top: 10px">
                <el-link type="primary" :href="`/mock/manage/cert?filename=${cert}`" :index="index">{{cert}}</el-link>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                certFiles: [
                    "client-cert.cer"
                    , "client-keystore.p12"
                    , "client-truststore.p12"
                    , "server-cert.cer"
                    , "server-keystore.p12"
                    , "server-truststore.p12"
                ]
            }
        }
    }
</script>

<style>
</style>