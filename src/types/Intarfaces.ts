export interface IImage{
urls:{
  regular:string
  small:string
}
user:{
  name:string
  profile_image:{
    large:string
  }
}
likes:number
}

export interface IApi{
  results:IImage[]
  total:number
  total_pages:number
}

export interface IPagination{
  pagination:{
    currentPage:number
    totalPage:number
  }
}