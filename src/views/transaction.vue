<!-- 交易首页 -->
<template>
	<div>
		<el-row class="row-bg" justify="space-between">
			<el-col :span="6" :xs="24" v-for="tabList in tabList">
				<router-link :to="{ path: 'transaction/transaction-details#'+tabList.name }">
					<div class="grid-content bg-purple">
						<div class="grid-data">
							<div>
								<span class="grid-title">{{tabList.name}}</span>
								<span class="grid-syl" v-if="tabList.syl>0">{{tabList.syl*100}}%</span>
								<span class="grid-syl" v-else style="color: #df2020;">{{tabList.syl*100}}%</span>
								<span style="color: #D9D9D9 ;"> 24H Vol{{tabList.tl}} </span>
							</div>
							<!-- <div><span>GMV {{tabList.gmv}}</span><span> TR {{tabList.tr}} </span></div> -->
							<div><span class="grid-title">{{tabList.zl}}</span></div>
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
		    name: 'transaction',
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
					url: this.$http.adornUrl("/transaction/tab"),
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
		/* border-radius: 4px; */
		/* background-color: #f9fafc; */		    
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
	.grid-syl{
		padding: 0 10px;
		font-size: 15px;
		color: #0fcdd5;
		// font-weight: 600;
	}
	
	@media (max-width: 767px) {
		.el-col {
			padding: 5px;
		}
	}

</style>
