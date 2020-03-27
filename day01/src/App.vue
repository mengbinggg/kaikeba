<template>
  <div id="app">
    <m-form :model='formData' :rule='formRules' ref="form">
      <m-form-item label='用户名' props='username'>
        <m-input v-model="formData.username" placeholder='请输入用户名'></m-input>
      </m-form-item>
      <m-form-item label='密码' props='password'>
        <m-input v-model="formData.password" placeholder='请输入密码' type='password'></m-input>
      </m-form-item>
      <button @click="saveData">保存</button>
    </m-form>

    <m-tree :treeData="treeData"></m-tree>
  </div>
</template>

<script>
import MInput from '@/components/MForm/MInput.vue';
import MFormItem from '@/components/MForm/MFormItem.vue';
import MForm from '@/components/MForm/MForm.vue';
import MsgBox from '@/components/MsgBox/MsgBox.vue';
import MTree from '@/components/MTree/MTree.vue';

export default {
  name: 'app',
  components: {
    MInput,
    MFormItem,
    MForm,
    MsgBox,
    MTree
  },
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      formRules: {
          username: [
            { required: true, message: '请输入用户名'}
          ],
          password: [
            { required: true, message: '请输入密码'}
          ]
      },
      treeData: {
        title: "食物",
        expand: true,
        children: [
          {
            title: "肉类"
          },
          {
            title: "蔬菜",
            children: [
              {
                title: "白菜"
              },
              {
                title: "茄子"
              }
            ]
          },
          {
            title: "水果",
            children: [
              {
                title: "橘子",
                children: [
                  {
                    title: "脐橙"
                  },
                  {
                    title: "橙子"
                  },
                  {
                    title: "广柑"
                  }
                ]
              },
              {
                title: "苹果",
                children: [
                  {
                    title: "青苹果"
                  },
                  {
                    title: "红苹果"
                  }
                ]
              },
              {
                title: "香蕉"
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    saveData() {
      this.$refs.form.validate(() => {
        this.$createMsgBox(MsgBox, {
          title: '提示信息',
          content: '保存成功！',
          duration: 2000
        }).showBox();
      });
    }
  }
}
</script>

<style>

</style>
