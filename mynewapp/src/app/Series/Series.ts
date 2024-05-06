export class Series {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  imageURL: string;


public constructor(id:number, name:string, channel:string, seasons:number,
  description:string, webpage:string, imageURL:string
){
  this.id = id;
  this.name = name;
  this.channel = channel;
  this.seasons = seasons;
  this.description = description;
  this.webpage = webpage;
  this.imageURL = imageURL;
}
}
