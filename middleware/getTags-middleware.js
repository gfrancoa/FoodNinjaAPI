import { getAllTags } from "../persistence/tags-repository.js";

export async function getTags(req,res,next){
  const validTags = await getAllTags();
  if(validTags === null){
    return next(err);
  }

  req.session.tags = validTags; 
  return next()
}