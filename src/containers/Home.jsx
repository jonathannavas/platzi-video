import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import Header from '../components/Header';

const Home = ({ mylist, trends, originals }) => {

    return(
        <>
            <Header />
            <Search isHome />

            {
                mylist.length > 0 && (
                    <Categories title='Mi Lista'>
                        <Carousel>
                            {
                                mylist.map( (item,id)=>{
                                    return <CarouselItem key={id} {...item} isList/>
                                })

                            }
                        </Carousel>
                    </Categories>
                )
            }

            <Categories title='Tendencias'>
                <Carousel>
                    {
                        trends.map( item => {
                           return <CarouselItem  key={item.id} {...item} />
                        })
                    }
                </Carousel>
            </Categories>

            <Categories title='Originales de Platzi Video'>
                <Carousel>
                    {
                        originals.map( item => {
                            return <CarouselItem  key={item.id} {...item} />
                        })
                    }
                </Carousel>
            </Categories>

        </>
    );
};

const mapStateToProps = state => {
    return{
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);