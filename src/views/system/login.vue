<template>
  <div class="container">
    <div class="title">
      <h1>沈阳坤江电力设备有限公司</h1>
    </div>

    <div class="content">
      <el-form :model="form" ref="formRef">

        <el-tabs v-model="state.activeTab" stretch>
          <el-tab-pane name="account" label="账户登录">
            <el-form-item prop="username">
              <el-input prefix-icon="User" placeholder="账户" v-model="state.accountForm.username"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-col>
                <el-input prefix-icon="Lock" placeholder="密码" v-model="state.accountForm.password"
                          show-password/>
              </el-col>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane name="phone" label="手机登录">
            <el-form-item prop="username">
              <el-input prefix-icon="User" placeholder="手机号" v-model="state.accountForm.phone"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-col :span="16">
                <el-input prefix-icon="Lock" placeholder="验证码" v-model="state.accountForm.code"/>
              </el-col>
              <el-col :span="7" :offset="1">
                <el-button class="full-button" :auto-insert-space="false">获取验证码</el-button>
              </el-col>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>

      <div class="login-option">
        <el-checkbox v-model="isAutoLogin" label="自动登录" size="large"/>
      </div>
      <el-button class="full-button" type="primary" @click="login">登录</el-button>
    </div>

    <div class="footer">
      Copyright © 2022 Shenyang Kunjiang Power Equipment Co., Ltd
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ComponentInternalInstance, getCurrentInstance, reactive, ref} from "vue";
import {post} from "/@/utils/Request";
import {useRouter} from "vue-router";

const {appContext} = getCurrentInstance() as ComponentInternalInstance

const message = appContext.config.globalProperties.$message

const router = useRouter()

const formRef = ref()
const isAutoLogin = ref(false)
const form = reactive({})

const state = reactive({
  accountForm: {},
  accountRules: {
    username: [
      {required: true, message: '', trigger: 'blur'},
    ],
    password: [
      {required: true, message: '', trigger: 'blur'},
    ]
  },
  activeTab: 'account'
})

const login = async () => {
  await formRef.value.validate((valid: any) => {
        if (valid) {
          if (state.activeTab === 'account') {

            post('/login', state.accountForm, res => {
                  if (res.status === "success") {
                    sessionStorage.setItem('token', res.token)
                    sessionStorage.setItem('user', JSON.stringify(res.user))
                    router.push({path: '/home'})
                    const {realName} = res.user
                    message.success("欢迎回来，" + realName + "!")
                  } else {
                    message.error(res.message)
                  }
                }
            )
          } else if (state.activeTab === 'phone') {

          }
        }
      }
  )
}

//清除登录信息
sessionStorage.removeItem('token')
sessionStorage.removeItem('user')
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  background: #f0f2f5 url(../../assets/background.svg) no-repeat 50%;
  background-size: 100%;

  .full-button {
    width: 100%;
  }

  .login-option {
    width: 100%;
  }

  .title {
    padding-top: 100px;
    text-align: center;
    height: 144px;
  }

  .content {
    margin: 0 auto;
    width: 350px;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    text-align: center;
  }
}


</style>