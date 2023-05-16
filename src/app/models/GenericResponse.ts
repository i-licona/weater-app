export interface GenericResponse {
  location:{
    name:string, 
    country:string
  };
  current:{
    condition:{},
    temp_c:string
  }
}