
# Input 输入框

表单基础组件，在原生控件基础上进行了功能扩展

## 如何使用
        
        <Input icon="search" size="large" />
        <Input type="password" size="large" />

## API

Input props

| 属性 | 说明 | 类型 | 默认值 |
| ----- | :----- | ----- |
| type | 输入框类型 | [text,password] | text |
| value | 绑定的值，可使用v-model双向绑定 | String, Number | 空 |
| size | 输入框的尺寸 |  [large,small] | default |
| placeholder | 占位文本 | String | - |
| disabled | 输入框禁用 |  Boolean | false |
| readonly | 输入框只读 |  Boolean | false |
| icon | 输入框尾部图标 |  String | - |
## 示例