<!-- 滚动通告组件 -->
<template>
	<div class="scroll">
		<ul id="scrollDiv" class="roll-ul" ref="rollul" :class="{anim:animate==true}">
			<!-- <span style="float: left;">最新通告：</span> -->
			<router-link style="float: right;" to="/a" :underline="false">更多<i class="el-icon-view el-icon-right"></i> </router-link>
			<li v-for="(item,index) in scroll_lists">
				<router-link :to="'/a/'+index" :underline="false"><span>{{item.time}}</span>
				<span>{{item.company}}</span></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				animate: false,
				scroll_lists: [{
						time: '2秒钟前',
						company: '海康威视（002415）'
					},
					{
						time: '8秒钟前',
						company: '烽火通信（600498）'
					},
					{
						time: '3分钟前',
						company: '恒逸石化（000703）'
					},
					{
						time: '5分钟前',
						company: '紫光国微（002049）'
					},
					{
						time: '39分钟前',
						company: '新天科技（300259）'
					},
					{
						time: '1小时前',
						company: '兴业银行（601166）'
					},
					{
						time: '3小时前',
						company: '中国核建（601611）'
					}
				]
			}
		},
		created() {
			setInterval(this.scroll, 2000)
		},

		methods: {
			// 根据字典生成随机序列
			randomCode: function(len, dict) {
				for (var i = 0, rs = ''; i < len; i++)
					rs += dict.charAt(Math.floor(Math.random() * 100000000) % dict.length);
				return rs;
			},
		scroll() {
			this.animate = true
			var that = this;
			setTimeout(function() {
				that.scroll_lists.push(that.scroll_lists[0]);
				that.scroll_lists.shift();
				that.animate = false;
			}, 1500)
		}
	}
	}
</script>
<style scoped>
		.scroll {
			margin-top: 20px;
			font-size: 15px;
			height: 50px;
			line-height: 50px;
			overflow: hidden;
			background-color: #FBFBFB;
		}

		.roll-ul {
			list-style: none;
			padding: 0 20px;
			margin: 0;
		}

		.nwwest-roll li {
			height: 50px;
			line-height: 50px;
		}

		.anim {
			transition: all 1.5s;
		}
		
</style>
