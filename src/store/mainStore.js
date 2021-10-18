const API = 'https://raw.githubusercontent.com/mucholocobbb/API-s/master/ForGeekBrains/'
const CostApi = 'vueCostsApi.json'
const CatApi = 'vueCategoryApi.json'
const CatFastApi = 'VueFastCategoryApi.json'

const state = {
    operationList: [],
    categoryList: [],
    fastCategory: [],
    pageQuantity: 1,
    lastPage: 1,
    showForm: false,
    showSymbol: '+',
}

const getters = {
    getCostList: state => state.operationList,
    getCatList: state => state.categoryList,
    getFastCatList: state => state.fastCategory,
    actualPage: state => state.pageQuantity,
    lastPage: state => state.lastPage,
    getShowForm: state => state.showForm,
    getShowSymbol: state => state.showSymbol,
}

const mutations = {
    //CostsArray
    setCostsArray(state, data) {
        Object.assign(state.operationList, data)
        state.operationList = [...state.operationList]
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
    editCostItem(state, item) {
        state.operationList.forEach(el => {
            if (item.id == el.id) {
                el.date = item.date
                el.cat = item.cat
                el.value = item.value
            }
        })
        state.operationList = [...state.operationList]
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
    //FastCategoryArray
    setFastCatArray(state, data) {
        state.fastCategory = data
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

    //--------
    openForm() {
        state.showForm = !state.showForm
        if (state.showSymbol === '+') {
            state.showSymbol = '-'
        } else {
            state.showSymbol = '+'
        }
    },
    reOpenForm() {
        state.showForm = false
        setTimeout(() => {
            state.showForm = true
        }, 1);
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
    },
    fetchFastCategory({
        commit
    }) {
        fetch(API + CatFastApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                commit('setFastCatArray', data)
            });
    }

}

export default {
    state,
    mutations,
    getters,
    actions
}