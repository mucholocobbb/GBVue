const API = 'https://raw.githubusercontent.com/mucholocobbb/API-s/master/ForGeekBrains/'
const CostApi = 'vueCostsApi.json'
const CatApi = 'vueCategoryApi.json'

const state = {
    operationList: [],
    categoryList: []
}

const getters = {
    getCostList: state => state.operationList,
    getCatList: state => state.categoryList,
}

const mutations = {
    setCostsArray(state, data) {
        state.operationList = data
    },
    setCatArray(state, data) {
        state.categoryList = data
    }

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