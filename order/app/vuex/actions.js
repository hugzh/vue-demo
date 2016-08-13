// index actions
export const showDetail = makeAction('SHOW_DETAIL')

function makeAction(type) {
  return ({
    dispatch
  }, ...args) => dispatch(type, ...args)
}