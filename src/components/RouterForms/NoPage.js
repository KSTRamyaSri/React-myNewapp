const NoPage = () => {
    const d = new Date();

    console.log(d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear())
    const hr = d.getHours() >= 12 ? d.getHours() % 12 : d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()
    console.log(hr + ":" + m + ":" + s)
    return <h1>Page Not Found <br /> 404 Error</h1>;
};
export default NoPage;