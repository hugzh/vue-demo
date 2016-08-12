// index actions
export const showDetail = makeAction('SHOW_DETAIL')
export const fold = makeAction('FOLD')

function makeAction(type) {
  return ({
    dispatch
  }, ...args) => dispatch(type, ...args)
}