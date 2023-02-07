<!-- 首页 -->
<template>
	<div class="home">
		<banner isHome="true"></banner>
		<div class="site-content animate">
			<!--通知栏-->
			<notice></notice>
			<CoinList></CoinList>
			<!--加载更多-->
			<div class="more" v-show="hasNextPage">
				<router-link to="/transaction" :underline="false">查看更多<i class="el-icon-view el-icon-right"></i>
				</router-link>

				<div class="flex-between more">
					<router-link to="/transaction/fast-trading" class="ksjyrk"><el-button>快捷交易</el-button></router-link>
					<router-link to="/investment/fast-investment" class="ksjyrk"><el-button>快捷投资</el-button></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from '@/components/banner'
	import Notice from '@/components/notice'
	import CoinList from '@/components/coin-list'

	export default {
		name: 'Home',
		props: ['cate', 'words'],
		data() {
			return {
				features: [],
				postList: [],
				currPage: 1,
				hasNextPage: true
			}
		},
		components: {
			Banner,
			Notice,
			CoinList
		},
		computed: {
			searchWords() {
				return this.$route.params.words
			},
			category() {
				return this.$route.params.cate
			},
			hideSlogan() {
				return this.category || this.searchWords
			},
			notice() {
				return this.$store.getters.notice
			}
		},
		methods: {
			// fetchFocus() {
			//     fetchFocus().then(res => {
			//         this.features = res.data || []
			//     }).catch(err => {
			//         console.log(err)
			//     })
			// },
			// fetchList() {
			//     fetchList().then(res => {
			//         this.postList = res.data.items || []
			//         this.currPage = res.data.page
			//         this.hasNextPage = res.data.hasNextPage
			//     }).catch(err => {
			//         console.log(err)
			//     })
			// },
			loadMore() {
				fetchList({
					page: this.currPage + 1
				}).then(res => {
					this.postList = this.postList.concat(res.data.items || [])
					this.currPage = res.data.page
					this.hasNextPage = res.data.hasNextPage
				})
			}
		},
		mounted() {
			// this.fetchFocus();
			// this.fetchList();
		}
	}
</script>
<style scoped lang="less">
	.ksjyrk{
		width: 30%;
		button{
			width: 100%;
		}
	}
	.site-content {
		.notify {
			margin: 60px 0;
			border-radius: 3px;

			&>div {
				padding: 20px;
			}
		}


		.search-result {
			padding: 15px 20px;
			text-align: center;
			font-size: 20px;
			font-weight: 400;
			border: 1px dashed #ddd;
			color: #828282;
		}
	}

	.top-feature {
		width: 100%;
		height: auto;
		margin-top: 30px;

		.feature-content {
			margin-top: 10px;
			display: flex;
			justify-content: space-between;
			position: relative;

			.feature-item {
				width: 32.9%;
			}
		}
	}

	.site-main {
		padding-top: 80px;

		&.search {
			padding-top: 0;
		}
	}

	.more {
		margin-bottom: 50px;
		padding: 20px;
		background-color: #FFFFFF;
		text-align: center;
	}

	/******/
	@media (max-width: 1400px) {
		.top-feature {
			display: none;
		}

		.site-main {
			padding-top: 40px;
		}

		.site-content {
			.notify {
				margin: 30px 0 0 0;
			}

			.search-result {
				margin-bottom: 20px;
				font-size: 16px;
			}
		}
	}
	@media (max-width: 800px) {
		.ksjyrk{
			width: 45%;
			button{
				width: 100%;
			}
		}
	}

	/******/
</style>
