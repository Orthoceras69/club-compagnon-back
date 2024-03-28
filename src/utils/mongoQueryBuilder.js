const queryBuilder = {
    getFindOptions({query}={}){
        const defaultLimit = 50
        const {
            fields=false,
            sort=false,
            page=null,
            limit=null,
            ...rest
            } = query;
        const mongooseQuery      = this.extractQuery(rest)
        const mongooseProjection = this.extractSimpleProjection(fields)
        const mongooseSort       = this.extractSort(sort)
        // {skip:10}, {limit:50}
        // const mongooseLimit      = this.extractLimit(perPage)
        // const mongooseSkip       = this.extractSkip(page,perPage)

        const findObjectParams = {
            filter    :mongooseQuery,
            projection:mongooseProjection,
            options   :{
                ...mongooseSort,
                // ...mongooseLimit,
                // ...mongooseSkip
            }
        }
       
        console.log(JSON.stringify(findObjectParams, null, 2))
        return findObjectParams

    },
    extractQuery(queryRest){
        return {...queryRest}
    },
    extractSort(sort){
        const sortOptions={}
        if(sort){
            if(sort.indexOf('-')>=0){
                const cleanParam=sort.slice(1,sort.length) 
                sortOptions[cleanParam]=-1
              }else{
                sortOptions[sort]=1
            }
        }
        return {sort:sortOptions}
    },
    extractSimpleProjection(fields){
        const projOptions={}
        if(fields){
            const fieldsList = fields.split(',');
            const onlyExclude = fieldsList.filter(elem=>elem.indexOf('-')>=0)
            onlyExclude.forEach((elem)=>{
                    const cleanParam=elem.slice(1,elem.length)
                    projOptions[cleanParam] = 0 ;
                
            })
        }
        return projOptions
    },
}

export default queryBuilder