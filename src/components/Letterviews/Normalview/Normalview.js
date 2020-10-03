import React from 'react';

export const Normalview = ({data}) => {

  // console.log(data.data.text.body.div[1].opener.salute)
  // for(const key in data.data) {
  //   if(key === '#text') console.log(data.data[key])
  // }
  let res = ''

  function loopThrough(ob) {

    for(const key in ob) {
      if(ob[key] instanceof Object) {
        loopThrough(ob[key])
        //return null
      } else {
        // console.log(`${key} is `, ob[key])
        // ob["#text"].map((el) => {
        //   res += el
        //   console.log(el)
        // })
        res += `[${key}]: ${ob[key]}`
      }
    }
    return res
  }

  // loopThrough(data.data)
  // console.log((data.data.text.body))


  return (
    // <div>{data.data.text.body.div[1].opener.salute}</div>
  <div><pre>{loopThrough(data.data.text.body)}</pre></div>
  )
}