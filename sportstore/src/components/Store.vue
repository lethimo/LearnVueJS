<template>
    <div class="container">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORT STORE</a>
                <cart-summary />
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 bg-info p-2">
                <CategoryControls />
            </div>
            <div class="col-md-9 p-2"> 
                <ProductList />
            </div>
        </div>
    </div>
</template>
<script>
import ProductList from "./ProductList.vue";
import CategoryControls from "./CategoryControls";
import CartSummary from "./CartSummary";
export default {
    components:{
        ProductList,
        CategoryControls,
        CartSummary
    }
}
</script>


