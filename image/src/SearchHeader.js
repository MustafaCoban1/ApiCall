function SearchHeader({search}) {
const handleFormSubmit = (event) => {
        event.preventDefault();
        debugger
        search ('can')
    }
    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}>
                <label>What are you looking for</label>
                <input/>
            </form>
        </div>
    );
}

export default SearchHeader