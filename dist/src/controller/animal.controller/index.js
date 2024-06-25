Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{AddAnimal:function(){return AddAnimal},getAnimal:function(){return getAnimal}});const _model=require("../../model");const _responseHandler=require("../../utils/responseHandler");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}const getAnimal=function(){var _ref=_async_to_generator(function*(req,res){const allAnimal=yield _model.db.Animal.find({}).populate("category");return(0,_responseHandler.successResponse)({res,message:`Get ${allAnimal.length} Animal`,data:allAnimal})});return function getAnimal(req,res){return _ref.apply(this,arguments)}}();const AddAnimal=function(){var _ref=_async_to_generator(function*(req,res){console.table(req.body);try{const body=req.body;if(!body.name||!body.category||!body.image){return(0,_responseHandler.errorResponse)({res,message:"name, category and image are required",statusCode:400})}console.log("checking name");const checkName=yield _model.db.Animal.findOne({name:body.name});if(checkName){return(0,_responseHandler.errorResponse)({res,message:` animal with '${body.name}' already exists`,statusCode:400})}console.log("adding animal");const newAnimal=yield _model.db.Animal.create({name:body.name,image:body.image,category:body.category});if(!newAnimal)throw new Error("unable to add animal");console.log("returning response");return(0,_responseHandler.successResponse)({res,message:"Animal Added",data:newAnimal})}catch(error){return(0,_responseHandler.errorResponse)({res,message:error===null||error===void 0?void 0:error.message})}});return function AddAnimal(req,res){return _ref.apply(this,arguments)}}();