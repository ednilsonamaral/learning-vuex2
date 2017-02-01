export default {
  'CHANGE_USER' (state, payload){
    // payload é o objeto com as informações que iremos fornecer a mutation
    state.user = payload
  }
}
