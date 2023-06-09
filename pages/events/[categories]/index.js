import CatEvent from '@/src/components/events/catEvent'
const EventsCatPage = ({data, pageName}) => {
    return (
        <CatEvent data={data} pageName={pageName}/>
    )
}

export default EventsCatPage

export async function getStaticPaths() {
    const {events_categories} = await import ('/tmp/data/data.json');
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                categories: ev.id.toString(),
            },
        }
    })
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.categories;
    const {allEvents} = await import ('/tmp/data/data.json');
    const data = allEvents.filter(ev => ev.city === id)
    return {props:{
        data,
        pageName: id
    }};
}