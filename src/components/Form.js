import { useState } from "react";


function Form(){
return (
    <div>
                <div className="container formStyle">
                    <div className="row">
                        <form className="show-form mx-auto" >
                            <h1 style={{padding:"50px;"}}>Todo</h1>
                            <div class="mb-3">
                                <label align="left" class="form-label">Title</label>
                                <input type="text" name="title" class="form-control" />
                               
                                    <p className="text-danger"></p>
                                 
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Price</label>
                                <input type="text" name="price" class="form-control" />
                               
                                    <p className="text-danger"></p>
                               
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <input type="text" name="description" class="form-control" />
                              
                                    <p className="text-danger"></p>
                                    
                                
                            </div>
                            <div class="mb-3 pt-4">
                                <button type="submit" className="btn-primary btn-lg">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  );
}
export default Form;