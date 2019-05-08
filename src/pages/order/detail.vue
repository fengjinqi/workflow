<template>
  <div class="detail">
    <div class="main">
      <div class="detail-item">
        <div class="flex-j border">
          <div class="title">{{data.orderType}}订单</div>
          <div class="orderNumb">订单编号：{{data.ordersGoodsResponses[0].goodsSn}}</div>
        </div>
        <div class="flex" style="height: 300px;">
          <div class="left">
            <template v-if="data.orderStatus=='待确认'">
              <div>
                <el-button
                  type="primary"
                  class="cancel"
                  style="color: #26B7BC;border-color: #26B7BC;"
                  @click="remove(data.tradeId)"
                >取消订单</el-button>
              </div>
              <div>
                <el-button
                  type="primary"
                  style="background: #26B7BC;border-color: #26B7BC;"
                  class="ok"
                  @click="sub(data.tradeId)"
                >确认订单</el-button>
              </div>
            </template>
            <template v-else-if="data.orderStatus=='审核中'">
              <div>
                <el-button
                  type="primary"
                  class="ok"
                  style="background: #26B7BC;border-color: #26B7BC;"
                  @click="remove(data.tradeId)"
                >取消订单</el-button>
              </div>
            </template>
            <template v-else-if="data.orderStatus=='待发货'">
              <div>
                <el-button
                  type="primary"
                  class="ok"
                  style="background: #26B7BC;border-color: #26B7BC;"
                >订单退款</el-button>
              </div>
            </template>
            <template v-else-if="data.orderStatus=='待收货'">
              <div>
                <el-button
                  type="primary"
                  class="cancel"
                  style="color: #26B7BC;border-color: #26B7BC;"
                >查看物流</el-button>
              </div>
              <div>
                <el-button
                  type="primary"
                  class="ok"
                  style="background: #26B7BC;border-color: #26B7BC;"
                >确认签收</el-button>
              </div>
            </template>
            <template v-else-if="data.orderStatus=='已完成'">
              <div>
                <el-button
                  type="primary"
                  class="ok"
                  style="background: #26B7BC;border-color: #26B7BC;"
                >申请售后</el-button>
              </div>
            </template>
            <template v-else-if="data.orderStatus=='已取消'">
              <div>
                <el-button
                  type="primary"
                  disabled
                  style="background: #26B7BC;border-color: #26B7BC;"
                >订单已取消</el-button>
              </div>
            </template>
            <template v-else-if="data.orderStatus=='使用中'">
              <div>
                <el-button disabled>使用中</el-button>
              </div>
            </template>
          </div>
          <div class="right">
            <div class="item">
              <div class="cont">
                <el-steps
                  :active="data.orderStatus=='待确认'?1:data.orderStatus=='审核中'?2:data.orderStatus=='待发货'?3:data.orderStatus=='待收货'?4:data.orderStatus=='已完成'?5:data.orderStatus=='使用中'?5:''"
                >
                  <el-step title="待确认">
                    <slot>
                      <img :src="dai" alt>
                    </slot>
                  </el-step>
                  <el-step title="审核中"></el-step>
                  <el-step title="待发货"></el-step>
                  <el-step title="待收货"></el-step>
                  <el-step title="已完成"></el-step>
                </el-steps>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-if="data.orderStatus=='待收货'">
        <Wuliu></Wuliu>
        <Yiliao></Yiliao>
      </template>
      <Maijia :addrs="data"></Maijia>
      <OrderList :list="data"></OrderList>
    </div>
  </div>
</template>
<style>
.el-button .ok .el-button--primary {
  background: #26b7bc;
}
</style>
<script>
import Ordering from "@/components/ordering"; //寄售订单
import Wuliu from "@/components/wuliu"; //物流轨迹
import Yiliao from "@/components/yiliao"; //医疗信息
import Maijia from "@/components/maijia"; //买家信息
import OrderList from "@/components/orderList"; //货物清单
import { getOrderDetail, removeOrderDetail } from "@/api/order";

import { getToken } from "@/libs/util";
export default {
  name: "detail",
  components: {
    Ordering,
    Wuliu,
    Yiliao,
    Maijia,
    OrderList
  },
  data() {
    return {
      data: [],
      dai: require("../../assets/846DBAB8-EB1C-4380-9AA0-F4A4583E73BF@1x.png")
    };
  },
  created() {
    getOrderDetail(getToken("token"), this.$route.params.id).then(res => {
      console.log(res);
      if (res.code == "OK") {
        this.data = res.data;
        this.data.goodsResponses.map(() => {
          item.count = 1;
          item.isChecked = false;
          return item;
        });
      }
    });
  },
  methods: {
    remove(nodeOrToken) {
      removeOrderDetail(getToken("token"), { tradeId: nodeOrToken }).then(
        res => {
          console.log(res);
          if (res.code == "OK") {
            this.$notify({
              title: "成功",
              message: "订单取消成功",
              type: "success"
            });
            this.$router.push({ name: "order" });
          }
        }
      );
    },
    sub(tradeId) {
      this.$router.push({
        name: "parent",
        query: {
          id: tradeId,
          price: this.data.totalAmount
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.detail-item {
  /*padding: 20px;*/
  background: #fff;
  margin-top: 20px;
  .border {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 20px 0 20px;
  }
  .orderNumb {
    font-size: 14px;
    padding: 20px 20px 0 20px;
  }
  .left {
    width: 200px;
    padding-top: 93px;
    padding-left: 80px;
    border-right: 1px solid #eee;
    .cancel {
      text-align: center;
      width: 100px;
      height: 42px;
      line-height: 42px;
      border-radius: 4px;
      border: 1px solid rgba(49, 152, 205, 1);
      background: #fff;
      color: rgba(49, 152, 205, 1);
      padding: 0;
      margin-bottom: 10px;
    }
    .ok {
      text-align: center;
      line-height: 42px;
      width: 100px;
      height: 42px;
      border-radius: 4px;
      background-color: rgba(49, 152, 205, 1);
      padding: 0;
    }
  }
  .right {
    width: 880px;
    .item {
      height: 110px;
      padding: 20px;
      ._title {
        font-size: 18px;
      }
      .cont {
        margin: 30px 60px 0 60px;
      }
    }
  }
}
</style>
