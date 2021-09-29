const API = 'https://raw.githubusercontent.com/mucholocobbb/API-s/master/ForGeekBrains/'
const CostApi = 'vueCostsApi.json'
const CatApi = 'vueCategoryApi.json'

const state = {
    operationList: [],
    categoryList: [],
    pageQuantity: 1,
    lastPage: 1,
}

const getters = {
    getCostList: state => state.operationList,
    getCatList: state => state.categoryList,
    actualPage: state => state.pageQuantity,
    lastPage: state => state.lastPage,
}

const mutations = {
    //CostsArray
    setCostsArray(state, data) {
        state.operationList = data
    },
    setAddCostItem(state, data) {
        state.operationList.push(data)
    },
    updateCostId(state) {
        for (let i = 0; i < state.operationList.length; i++) {
            state.operationList[i].id = `${i+1}`
        }
        state.operationList = [...state.operationList]
    },
    delCostItem(state, item) {
        state.operationList.forEach(element => {
            if (item == element.id) {
                state.operationList.splice(element.id - 1, 1)
            }
        });
    },
    //CategoryArray
    setCatArray(state, data) {
        state.categoryList = data
    },
    delCatItem(state, id) {
        state.categoryList.splice(state.categoryList.findIndex(element => element.id == id), 1)
    },
    addCatItem(state, newItem) {
        state.categoryList.push(newItem)
    },
    //Pagination
    actualPagePlus(state) {
        state.pageQuantity++
    },
    actualPageMinus(state) {
        state.pageQuantity--
    },
    actualPageChange(state, info) {
        state.pageQuantity = info
    },
    setLastPage(state, info) {
        state.lastPage = info
    },


}

const actions = {
    fetchCosts({
        commit
    }) {
        fetch(API + CostApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                commit('setCostsArray', data)
            });
    },
    fetchCategory({
        commit
    }) {
        fetch(API + CatApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                commit('setCatArray', data)
            });
    }

}

export default {
    state,
    mutations,
    getters,
    actions
}