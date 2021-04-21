<!--
 * @file: 
 * @Author: guokai
 * @Date: 2021-04-06 18:01:34
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-21 16:35:48
-->
<template>
  <div>
      <h1>{{ msg }}</h1>
      <div class="hello">
          <el-table
              :data="tableData"
              ref="singleTable"
              highlight-current-row
              @current-change="handleCurrentChange"
              style="width: 466px"
          >
              <el-table-column width="50">
                  <template v-slot="props">
                      <el-radio
                          v-model="currentRow"
                          :label="props.row.id"
                          @change="handleCurrentChange(props.row)"
                      >
                          {{""}}
                      </el-radio>
                  </template>
              </el-table-column>
              <el-table-column>
                  <template v-slot="props">
                      <div>{{ props.row.title }}</div>
                      <div>{{ props.row.number }}</div>
                  </template>
              </el-table-column>
          </el-table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    msg: String
  },
  data(){
    return{
       tableData: [
          {
            id:1,
            title: '大厦大厦大所大大是是是',
            number: '张三、李四、王五、测试123…等6人',
          }, 
          {
            id:2,
            title: '阿达大大奥术大师大所',
            number: '张三、李四、王五、测试123…等14人',
          },
          {
            id:3,
            title: 'UE团队周例会',
            number: '张三、李四、王五、测试123…等14人',
          },
          {
            id:4,
            title: '爱仕达大所大当前 需求评审',
            number: '张三、李四、王五、测试123…等12人',
          },
          {
            id:5,
            title: '碎金撒大大所多 需求评审',
            number: '张三、李四、王五、测试123…等12人',
          }
        ],
        currentRow: -1,
    }
  },
  methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        console.log(val.id)
        this.currentRow = val.id;
      }
    }
}
</script>

// <style lang="sass" scoped>
// .book-result
//     .meeting-dialog-content
//         cursor: pointer
//         .title
//             height: 22px
//             line-height: 22px
//             font-size: 14px
//             color: #444444
//         .people-number
//             height: 16px
//             line-height: 16px
//             font-size: 12px
//             color: #ABABAB
//     .meeting-dialog-footer
//         text-align: right
//         margin-bottom: -30px
//         padding: 7px 20px
//         position: relative
// </style>
// <style lang="sass" scoped>
//     /deep/ .el-radio
//         margin: 0
//         height: 16px
//     /deep/ .el-radio__inner
//         width: 16px
//         height: 16px
//         background: transparent !important
//         box-sizing: border-box
//         border: 1px solid #D7D8DA
//     /deep/ .el-radio__inner::after
//         width: 5px
//         height: 5px
//         background: #18C984
// </style>
