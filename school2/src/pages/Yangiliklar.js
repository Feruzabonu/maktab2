import React, { Component } from 'react'
import styles from '../css/yangiliklar.module.css'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import '../App.css'
import {FaRegCalendarAlt} from 'react-icons/fa'
import school1 from '../img/nam-hoang-RHNiArBkukE-unsplash.jpg'
import { Container ,Row,Col} from 'react-bootstrap'
import ScaleLoader from 'react-spinners/ScaleLoader';
import Navbar from './Navbar';
import Footer from './Footer'
export default class Yangiliklar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader:true,
          offset: 0,
          data: [
              {   
                  image:school1,
                  date:'JAN. 18, 2021',
                  title:'Build your Dream Software & Engineering Career',
                  text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
              },
              {   
                  image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },
            {   
                image:school1,
                date:'JAN. 18, 2021',
                title:'Build your Dream Software & Engineering Career',
                text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            }
          ],
          perPage: 6,
          currentPage: 0
    };
    this.handlePageClick = this
    .handlePageClick
    .bind(this);
    }
    componentDidMount() {
      setInterval(()=>{
          this.setState({
              loader:false
          })
      },2000)
    }
    receivedData() {
                
                const slice = this.state.data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <div style={{width:'350px',height:'500px',margin:'30px',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',borderRadius:'5px'}}>
                        <div style={{width:'100%',height:'250px'}}>
                            <img src={pd.image} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                        </div>
                        <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                            <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>{pd.date}</span>
                            <h4 style={{marginTop:'20px'}}>{pd.title}</h4>
                            <p style={{color:'#9D9D9D',marginTop:'20px'}}>{pd.text}</p>
                         </div>
                    </div>
                    
                </React.Fragment>)
  
                this.setState({
                    pageCount: Math.ceil(this.state.data.length / this.state.perPage),
                   
                    postData
                })
      
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
  
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
  
    };
  
    componentDidMount() {
        this.receivedData()
        setInterval(()=>{
            this.setState({
                loader:false
            })
        },2000)
    }
    render() {

        return (
            <div>
            {this.state.loader ? (
              <div className={styles.loader}>
                <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
              </div>
            ) : (
           <div style={{backgroundColor:'#F8F8F8',textAlign:'center'}}>
               <Navbar/>
               <div className={styles.header}>
                  <h1>Yangiliklar</h1>
               </div>
               <h2 style={{textAlign:'center',backgroundColor:'#F8F8F8',marginBottom:'0',marginTop:'20px'}}>So'nngi yangiliklar</h2>
                <div className={styles.news}>
                
                        {this.state.postData}
                 
             
            </div>
            <ReactPaginate
                  previousLabel={"oldingisi"}
                  nextLabel={"keyingisi"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
              <Footer/>
           </div>
              )}
              </div>
        )
    }
}
