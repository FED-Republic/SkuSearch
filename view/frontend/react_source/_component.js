if (document.getElementById('sku-search-wrapper')) {
    const element = document.getElementById('sku-search-wrapper');
    const SkuSearch = React.lazy(() => import('SkuSearch'));
    ReactDOM.render(
        <React.Suspense fallback={<div dangerouslySetInnerHTML={{__html: element.innerHTML}}/>}>
            <SkuSearch originalContent={element.innerHTML} />
        </React.Suspense>, element);
}

