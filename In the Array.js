function inArray(array1,array2){
    let r = []
  array2.map(item=>{
    array1.map(subItem => {
      if(item.includes(subItem)){
      !(r.includes(subItem)) && r.push(subItem)
      }
    })
  })
  console.log(r.sort());
}
