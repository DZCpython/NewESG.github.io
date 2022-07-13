window.sheetESG = {
        "name": "ESG", //工作表名称
        "color": "", //工作表颜色
        "index": 0, //工作表索引
        "status": 1, //激活状态
        "order": 0, //工作表的下标
        "hide": 0,//是否隐藏
        "row": 5000, //行数
        "column": 49, //列
        "zoomRatio":1.15,
        "scrollLeft": 0,
        "scrollTop": 0,
        "filter_select":{"row": [ 0, 9999], "column": [ 0, 48 ]},
        "config": {
            "merge":{}, //合并单元格
            "rowlen":{"0":60, "1": 35}, //表格行高
            "columnlen":{"0":55, "20": 44, "26": 99}, //表格列宽
            "colhidden":{}, //隐藏列
            "authority":{//当前工作表的权限配置
                selectLockedCells:1, //选定锁定单元格
                selectunLockedCells:1, //选定解除锁定的单元格
                formatCells:1, //设置单元格格式
                formatColumns:1, //设置列格式
                formatRows:1, //设置行格式
                insertColumns:0, //插入列
                insertRows:1, //插入行
                insertHyperlinks:1, //插入超链接
                deleteColumns:0, //删除列
                deleteRows:1, //删除行
                sort:1, //排序
                filter:1, //使用自动筛选
                usePivotTablereports:0, //使用数据透视表和报表
                //editObjects:1, //编辑对象
                //editScenarios:1, //编辑方案
                sheet:1, //如果为1或true，则该工作表受到保护；如果为0或false，则该工作表不受保护。
                hintText:"标题区域禁止修改", //弹窗提示的文字
                algorithmName:"MD2",//加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
                saltValue:123, //密码解密的盐参数，为一个自己定的随机数值
                allowRangeList:[{ //区域保护
                    name:"", //名称
                    password:"", //密码
                    hintText:"", //提示文字
                    algorithmName:"None",//加密方案：MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
                    saltValue:null, //密码解密的盐参数，为一个自己定的随机数值
                    sqref:"$A$2:$AW$9999" //区域范围
                }]
            },
        },
        "frozen":{type: 'rangeRow', range: {row_focus: 0, column_focus: 0}},
        "celldata":[{"r":1,"c":0,"v":"此处粘贴"},{"r":0,"c":0,"v":{"m":"流水号","v":"流水号","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":1,"v":{"v":"DID","ct":{"fa":"General","t":"g"},"m":"DID","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":2,"v":{"v":"sameID","ct":{"fa":"General","t":"g"},"m":"sameID","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":3,"v":{"v":"来源流水号","ct":{"fa":"General","t":"g"},"m":"来源流水号","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":4,"v":{"v":"公告日期","ct":{"fa":"General","t":"g"},"m":"公告日期","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":5,"v":{"v":"披露公司所属行业","ct":{"fa":"General","t":"g"},"m":"披露公司所属行业","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":6,"v":{"v":"报告类型","ct":{"fa":"General","t":"g"},"m":"报告类型","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":7,"v":{"v":"披露公司代码(8位)","ct":{"fa":"General","t":"g"},"m":"披露公司代码(8位)","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":8,"v":{"v":"披露公司代码(10位)","ct":{"fa":"General","t":"g"},"m":"披露公司代码(10位)","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":9,"v":{"v":"披露公司名称","ct":{"fa":"General","t":"g"},"m":"披露公司名称","bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":10,"v":{"v":"数据归属公司代码(10位)","ct":{"fa":"General","t":"g"},"m":"数据归属公司代码(10位)","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":11,"v":{"v":"数据归属公司名称","ct":{"fa":"General","t":"g"},"m":"数据归属公司名称","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":12,"v":{"v":"数据归属年度","ct":{"fa":"General","t":"g"},"m":"数据归属年度","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":13,"v":{"v":"报告期年度","ct":{"fa":"General","t":"g"},"m":"报告期年度","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":14,"v":{"v":"指标类别(披露)","ct":{"fa":"General","t":"g"},"m":"指标类别(披露)","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":15,"v":{"v":"指标名称(披露)","ct":{"fa":"General","t":"g"},"m":"指标名称(披露)","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":16,"v":{"v":"数值(披露)","ct":{"fa":"General","t":"g"},"m":"数值(披露)","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":17,"v":{"v":"单位(披露)","ct":{"fa":"General","t":"g"},"m":"单位(披露)","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":18,"v":{"v":"币种代码","ct":{"fa":"General","t":"g"},"m":"币种代码","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":19,"v":{"v":"值类型","ct":{"fa":"General","t":"g"},"m":"值类型","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":20,"v":{"m":"报告链接","v":"报告链接","ct":{"fa":"General","t":"g"},"bg":null,"bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":21,"v":{"v":"统计范围","ct":{"fa":"General","t":"g"},"m":"统计范围","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":22,"v":{"v":"统计范围类别","ct":{"fa":"General","t":"g"},"m":"统计范围类别","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":23,"v":{"v":"指标所在页码","ct":{"fa":"General","t":"g"},"m":"指标所在页码","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":24,"v":{"v":"排序","ct":{"fa":"General","t":"g"},"m":"排序","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":25,"v":{"v":"内容描述","ct":{"fa":"General","t":"g"},"m":"内容描述","bg":"#8bccf7","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":26,"v":{"v":"标准指标名称","ct":{"fa":"General","t":"g"},"m":"标准指标名称","bg":"#ffff00","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":27,"v":{"v":"标准指标代码","m":"标准指标代码","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":28,"v":{"v":"标准化数值","m":"标准化数值","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":29,"v":{"v":"标准单位","m":"标准单位","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":30,"v":{"v":"标准单位代码","m":"标准单位代码","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":31,"v":{"v":"一级指标代码","m":"一级指标代码","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":32,"v":{"v":"一级指标名称","m":"一级指标名称","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":33,"v":{"v":"二级指标代码","m":"二级指标代码","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":34,"v":{"v":"二级指标名称","m":"二级指标名称","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":35,"v":{"v":"指标类别","m":"指标类别","ct":{"fa":"General","t":"g"},"bg":"#ffff00","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":36,"v":{"v":"标准化状态","m":"标准化状态","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":37,"v":{"v":"基础表回写状态","m":"基础表回写状态","ct":{"fa":"General","t":"g"},"bg":"#ffff00","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":38,"v":{"v":"衍生指标运算规则","m":"衍生指标运算规则","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":39,"v":{"v":"审核状态","m":"审核状态","ct":{"fa":"General","t":"g"},"bg":"#ffff00","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":40,"v":{"v":"Guid","m":"Guid","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":41,"v":{"v":"备注","m":"备注","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":42,"v":{"v":"标准化是否重复","m":"标准化是否重复","ct":{"fa":"General","t":"g"},"bg":"#aff4dc","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":43,"v":{"v":"基础数据是否重复","m":"基础数据是否重复","ct":{"fa":"General","t":"g"},"bg":"#aff4dc","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":44,"v":{"v":"GUID报告期是否唯一","m":"GUID报告期是否唯一","ct":{"fa":"General","t":"g"},"bg":"#aff4dc","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":45,"v":{"v":"统计范围是否规范","m":"统计范围是否规范","ct":{"fa":"General","t":"g"},"bg":"#aff4dc","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":46,"v":{"v":"标准名称是否规范","m":"标准名称是否规范","ct":{"fa":"General","t":"g"},"bg":"#aff4dc","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":47,"v":{"v":"报告期是否规范","m":"报告期是否规范","ct":{"fa":"General","t":"g"},"bg":"#aff4dc","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}},{"r":0,"c":48,"v":{"v":"编辑人","m":"编辑人","ct":{"fa":"General","t":"g"},"bg":"#eeeeee","bl":1,"it":0,"ff":4,"fs":11,"fc":"rgb(0, 0, 0)","ht":"0","vt":0,"tb":"2"}}]}
// export default sheetESG;