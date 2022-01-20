import React from 'react';

function Textform() {
    return (
        <>
            <div className="container my-3 bg-light p-4 rounded">
                <h1>Enter the text to analyze :</h1>
                <div className="form-floating">
                    <textarea className="form-control input-lg my-2 mb-4"  placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '150px' }}>
                    </textarea>
                    <label htmlFor="floatingTextarea2 ">Enter : </label>
                </div>

                <button type="button" className="btn btn-primary">Convert to Uppercase</button><br />
                <button type="button" className="btn btn-warning my-2">Convert to Lowercase</button><br />
                <button type="button" className="btn btn-success">Capitalize</button><br />
                <button type="button" className="btn btn-danger my-2">Clear</button><br /><hr />
                
                <h2 className='mt-2'>Other Features :</h2>
                <button type="button" className="btn btn-secondary">Copy Text</button><br />
                <button type="button" className="btn btn-secondary my-2">Remove Extra Spaces</button><br />


            </div>
        </>
    );
}

export default Textform;
