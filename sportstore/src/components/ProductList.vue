<template>
<div>
    <div v-for = "p in products" v-bind:key= "p.id" class="card m-1 p-1 bg-light">
        <h4>{{p.name}}
        <span class="badge badge-pill badge-success float-right">{{p.price|currency}}</span>
        </h4>
        <div class="card-text p-1"> {{p.description}}
            <button type="button" class="btn btn-success btn-sm float-right" v-on:click ="handleProductAdd(p)" >Add to Cart</button>
        </div>
    </div>
    <page-controls />
</div>
</template>
<script>
import { mapGetters, mapMutations} from "vuex";
import PageControls from "./PageControls.vue";
export default {
    components:{ PageControls},
    computed:{
        ...mapGetters({products:"processedProducts"})
    },
    filters:{
        currency(value){
            return new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(value);
        }
    },
    methods:{
        ...mapMutations({ addProduct: "cart/addProduct"}),
        handleProductAdd(product){
            this.addProduct(product);
            this.$router.push("/cart");
        }
    }
}
</script>
