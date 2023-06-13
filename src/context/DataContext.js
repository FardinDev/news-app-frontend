import React, { createContext, useState, useEffect } from "react";


const DataContext = createContext();
export { DataContext }

export default ({ children }) => {
    // const [user, setUser] = useState({ 'fullName': 'Fardin Rahman', 'email': 'koushikme@gmail.com' });
    // const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ln_HY7p9XKZi_RqfIgWlQbquy_6sMHISdQ2dFTgYsjE");
    // const [authenticated, setAuthenticated] = useState(true);

    const count = 10;
    const dataUrl = `http://localhost:8000/api/get-feed`;

    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(parseInt(1));
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [initLoading, setInitLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    useEffect(() => {
        fetch(dataUrl)
            .then((res) => res.json())
            .then((res) => {

                let articles = res?.data;
                console.log('================response====================');
                console.log(articles);
                console.log('================response====================');


                setInitLoading(false);
                setData(articles);
                setList(articles);
            });

        return () => console.log('my effect is destroying');

    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        fetch(dataUrl + '?page=' + page)
            .then((res) => res.json())
            .then((res) => {
                let articles = res?.data;
                console.log('================response====================');
                console.log(articles);
                console.log('================response====================');
                const newData = data.concat(articles);

                setData(newData);
                setList(newData);
                setLoading(false);

                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
    };



    return (
        <DataContext.Provider
            value={{
                loading, setLoading,
                page, setPage,
                data, setData,
                list, setList,
                initLoading,
                setInitLoading,
                open,
                setOpen,
                selectedItem,
                setSelectedItem,
                onLoadMore
            }}
        >
            {children}
        </DataContext.Provider>
    );
};