import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios"; // cung cấp HTTP Request
import CartModule from "./cart";
Vue.use(Vuex);
const baseUrl = "http://localhost:3500";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;
const testData = [];
// create data test
// for (let i = 1; i <= 10; i++) {
//     testData.push({
//         id: i,
//         name: `Product #${i}`,
//         category: `Category #${i%3}`,
//         description: `This is Product #${i}`,
//         price: i * 50
//     })
// }



export default new Vuex.Store({
    strict: true,
    modules: { cart: CartModule },
    state: {
        products: [],
        categoriesData: [], //danh sachs categories
        productsTotal: testData.length,
        currentPage: 1,
        pageSize: 4,
        currentCategory: "All"
    },
    getters: {
        //Adding Product Pagination: Thêm phân trang
        /*
        processedProducts: state => {
            let index = (state.currentPage - 1) * state.pageSize;
            return state.products.slice(index, index + state.pageSize);
        },
        pageCount: state => Math.ceil(state.productsTotal / state.pageSize)
        */
        // Adding Category Selection: Thêm lựa chọn danh mục sản phẩm
        productsFilteredByCategory: state => state.products.filter(p => state.currentCategory == "All" || p.category == state.currentCategory),
        processedProducts: (state, getters) => {
            let index = (state.currentPage - 1) * state.pageSize;
            return getters.productsFilteredByCategory.slice(index, index + state.pageSize);
        },
        pageCount: (state, getters) => Math.ceil((getters.productsFilteredByCategory.length) / state.pageSize),
        categories: state => ["All", ...state.categoriesData]

    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1
        },
        setData(state, data) {
            state.products = data.pdata;
            state.productsTotal = data.pdata.length;
            state.categoriesData = data.cdata.sort();
        }
    },
    actions: {
        async getData(context) {
            let pdata = (await Axios.get(productsUrl)).data;
            let cdata = (await Axios.get(categoriesUrl)).data;
            context.commit("setData", { pdata, cdata });
        }
    }
})