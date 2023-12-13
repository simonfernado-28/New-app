import React, {useState} from "react";
import './formval.css';

function Formvalidation(){
    const [view, setview] = useState('');
    const [add, setadd] = useState('');
    const [data, setdata] = useState([{name:'simon',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test1',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test2',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test3',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test4',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test5',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test6',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test7',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test8',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'},
    {name:'test9',num:'9578322261',email:'simon@gmail.com',course:'react',fees:'25000'}]);
    const [student, setstudent] = useState({
        name:'',
        num:'',
        email:'',
        course:'',
        fees:''
    });
    const [show, setshow] = useState();
    const [buttonColor, setButtonColor] = useState('rgb(117, 201, 250)');
    const [clickedIndex, setClickedIndex] = useState(null);

    const handlechange = (eve, property)=>{
        setstudent({
            ...student,
            [property]:eve.target.value,
        }); 
    };

    const handleadd =()=>{
        setdata([...data, student]);
        console.log(`setdata  ${data}`);
        setstudent({
            name:'',
            num:'',
            email:'',
            course:'',
            fees:''
        })
        setadd('');
        setview(1);
        if (Number(data.length) === clickedIndex) {
            setButtonColor('rgb(117, 201, 250)');
            setClickedIndex(null);
          } else {
            setButtonColor('rgb(3, 113, 176)');
            setClickedIndex(Number(data.length));
          }
    };

    const cardchange=()=>{
        setadd(1);
        setview('');
        setshow(data.length);
    };

    const handleClick = (index) => {
        setadd('');
        setview(1);
        setshow(index);
        if (index === clickedIndex) {
            setButtonColor('rgb(117, 201, 250)');
            setClickedIndex(null);
          } else {
            setButtonColor('rgb(3, 113, 176)');
            setClickedIndex(index);
          }
    };    
    
    return (
        <React.Fragment>
            <div style={{padding:"100px", paddingTop:"20px", backgroundColor:"CaptionText"}}>
                <h1 style={{textAlign:"center", color:"white", marginTop:"3px"}}>Fees Management System</h1>
                <div style={{display:'flex', justifyContent:"center", paddingBottom:"5px"}}>
                    <div className='card'>
                        <div className="app-container">
                            <table>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:"black", color:"white", padding:"5px"}}>Student Name</th>
                                    <th style={{backgroundColor:"black", color:"white", padding:"5px"}}>Course</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {data.map((names, idx)=>(
                                        <tr key={idx}>
                                            <td style={{padding:"5px", backgroundColor: idx === clickedIndex ? buttonColor : 'rgb(117, 201, 250)'}}
                                                onClick={()=>handleClick(idx)} >{names.name}</td>
                                            <td style={{padding:"5px", backgroundColor: idx === clickedIndex ? buttonColor : 'rgb(117, 201, 250)'}}>{names.course}</td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className='card1'>
                            <h4 style={{paddingLeft:"50px"}}>Student admission here
                                <span>
                                    <button className="button1" onClick={()=>cardchange()}>Add</button>
                                </span>
                            </h4>
                        </div>
                        {add && 
                        <div className='card2'>
                            <p>
                                <div class="form__group field">
                                    <label for="name" class="form__label">Name</label>
                                    <input type='text' class="form__field" value={student.name} onChange={(e)=>handlechange(e,'name')}/>                                    
                                </div>
                            </p>
                            <p>
                                <div class="form__group field">
                                    <label for="name" class="form__label">Phone Number</label>
                                    <input type='text' class="form__field" value={student.num} onChange={(e)=>handlechange(e,'num')}/>
                                </div>
                            </p>
                            <p>
                                <div class="form__group field">
                                    <label for="name" class="form__label">email</label>
                                    <input type='text' class="form__field" value={student.email} onChange={(e)=>handlechange(e,'email')}/>
                                </div>
                            </p>
                            <p>
                                <div class="form__group field">
                                    <label for="name" class="form__label">course</label>
                                    <input type='text' class="form__field" value={student.course} onChange={(e)=>handlechange(e,'course')}/>
                                </div>
                            </p>
                            <p>
                                <div class="form__group field">
                                    <label for="name" class="form__label">fees</label>
                                    <input type='text' class="form__field" value={student.fees} onChange={(e)=>handlechange(e,'fees')}/>                                  
                                </div>
                            </p>
                            <p>
                                <button className="button2" onClick={()=>handleadd()} style={{placeItems: "center"}}>Submit Booking</button>
                            </p>
                        </div>
                        }
                        {view && 
                        <div>
                            <h4 className="tbodyStyle">Student Details</h4>
                            <div className="card2" style={{paddingLeft: "100px", alignItems:"center"}}>
                            <ul>
                                {data.map((student, idx) => {
                                            if (idx === show){
                                                return (
                                                    <div key={idx}>
                                                        <table className="table1"> 
                                                            <tbody className="tbodyStyle">
                                                                <tr>
                                                                    <td style={{ fontSize:"13px"}}>Name</td>
                                                                    <td style={{fontSize:"13px"}}>{student.name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ fontSize:"13px"}}>Phone Number</td>
                                                                    <td style={{fontSize:"13px"}}>{student.num}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ fontSize:"13px"}}>Email</td>
                                                                    <td style={{fontSize:"13px"}}>{student.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ fontSize:"13px"}}>Course</td>
                                                                    <td style={{fontSize:"13px"}}>{student.course}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ fontSize:"13px"}}>Fee Amount</td>
                                                                    <td style={{fontSize:"13px"}}>{`${student.fees}.Rs`}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                            </ul>
                            </div>
                        </div>
                        }    
                    </div>
            </div>

            </div>

        </React.Fragment>
        
    );
}
export default Formvalidation;

