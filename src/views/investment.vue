<!-- 投资首页 -->
<template>
	<div>
		<el-row class="row-bg" justify="space-between">
			<el-col :span="6" :xs="24" v-for="tabList in tabList">
				<router-link :to="{ path: 'investment/investment-details#'+tabList.name }">
					<div class="grid-content bg-purple">
						<div class="grid-data">
							<div><span class="grid-title">{{tabList.name}}</span></div>
							<div><span>GMV {{tabList.gmv}}</span><span> TR {{tabList.tr}} </span></div>
							<div><span>ROI</span><span class="grid-title">{{tabList.roi}}</span></div>
						</div>
					</div>
				</router-link>
			</el-col>
		</el-row>
		<div class="site-content">
			<InvestTabs></InvestTabs>
		</div>
	</div>

</template>

<script>
	import InvestTabs from '@/components/invest-tabs'

	export default {
		name: 'investment',
		props: ['cate', 'words'],
		data() {
			return {
				tabList: []
			}
		},
		components: {
			InvestTabs,
		},
		computed: {

		},
		methods: {
			tabLists() {
				this.$http({
					url: this.$http.adornUrl("/investment/tab"),
					method: "get",
				}).then(({
					data
				}) => {
					// console.log(data.data[1].cont)
					this.tabList = data.data;

				});
			}
		},
		created() {
			this.tabLists();
		}
	}
</script>

<style scoped lang="less">
	.el-row {
		margin: 0 !important;
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border: 1px solid #0d5959;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #ffffff;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		/* border-radius: 4px; */
		min-height: 106px;
		position: relative;
		align-items: center;
		text-align: center;
	}

	.row-bg {
		// padding: 10px 0;
		/* background-color: #f9fafc; */
	}

	.grid-data {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		font-size: 12px;
		color: #757575;
		line-height: 25px;
	}

	.grid-title {
		font-size: 16px;
		color: #333333;
		font-weight: 700;
	}

	@media (max-width: 767px) {
		.el-col {
			padding: 5px;
		}
	}
</style>
