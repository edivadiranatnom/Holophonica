const state = {
    startVideo: false
}

const getters = {
    getStartVideo: (state) => state.startVideo
}

const mutations = {
    start(state) {
        state.startVideo = true;
    }
}

export default {
    state,
    getters,
    mutations
};