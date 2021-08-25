import React, { useState } from 'react'
import ToDoLists from './ToDoLists'

const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {


        setInputList(event.target.value);


    }

    const listOfItems = () => {

        if (inputList !== '') {
            setItems((oldItems) => {

                if(oldItems.length === 9)
                {
                     alert('Memory excedded of App !. Reduce some Tasks');
                     return [...oldItems];
                }
                else{

                
                return [...oldItems, inputList];

                }



            });
            setInputList("");
        }
        else{
            alert('Make sure you type something in the text box');
        }



    };


    const deleteItems = (id) => {
        console.log('delted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        });
    }


    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>To Do List</h1>
                    <br />
                    <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                       

                        {Items.map((itemval, index) => {

                            return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems} />


                        })}
                    </ol>

                </div>
            </div>


        </>



    );



};

export default App;