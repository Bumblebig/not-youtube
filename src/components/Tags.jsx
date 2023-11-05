export default function Tags () {
    const data = [
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',  
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All',
        'All', 
    ]
    
    
 const el = data.map((el, i) => <p key={i + 1} className="bg-gray-100 hover:bg-gray-200 py-2 text-base px-3 rounded-md cursor-pointer font-normal">{el}</p>)

    return (
        <div className="flex pt-3 pb-3 gap-3 w-full overflow-auto mb-12 tags fixed tag-wrapper bg-white">
            {el}
        </div>
    )
}