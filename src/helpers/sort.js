export const SortByName = (state, setState, count, setCount) => {
    if (count.sortByName % 2 === 0 )
        setState(state.sort(( a, b ) => a.first_name.localeCompare(b.first_name)))
    else setState(state.sort(( a, b ) => b.first_name.localeCompare(a.first_name)))
    setCount({...count, sortByName: count.sortByName + 1})
}

export const SortByLastName = (state, setState, count, setCount) => {
    if (count.sortByLastName % 2 === 0 )
        setState(state.sort(( a, b ) => a.last_name.localeCompare(b.last_name)))
    else setState(state.sort(( a, b ) => b.last_name.localeCompare(a.last_name)))
    setCount({...count, sortByLastName: count.sortByLastName + 1})
}

export const SortByEmail = (state, setState, count, setCount) => {
    if (count.sortByEmail % 2 === 0 )
        setState(state.sort(( a, b ) => a.email.localeCompare(b.email)))
    else setState(state.sort(( a, b ) => b.email.localeCompare(a.email)))
    setCount({...count, sortByEmail: count.sortByEmail + 1})
}

export const SortByUsername = (state, setState, count, setCount) => {
    if (count.sortByUsername % 2 === 0 )
        setState(state.sort(( a, b ) => a.username.localeCompare(b.username)))
    else setState(state.sort(( a, b ) => b.username.localeCompare(a.username)))
    setCount({...count, sortByUsername: count.sortByUsername + 1})
}

export const SortByPayStatus = (state, setState, count, setCount) => {
    if (count.sortByPayStatus % 2 === 0 )
        setState(state.sort(( a, b ) => a.pay_status - b.pay_status))
    else setState(state.sort(( a, b ) => b.pay_status - a.pay_status))
    setCount({...count, sortByPayStatus: count.sortByPayStatus + 1})
}

export const SortById = (state, setState, count, setCount) => {
    if (count.sortById % 2 === 0 )
        setState(state.sort(( a, b ) => a.id - b.id))
    else setState(state.sort(( a, b ) => b.id - a.id))
    setCount({...count, sortById: count.sortById + 1})
}

export const SortByLink = (state, setState, count, setCount) => {
    if (count.sortByLink % 2 === 0 )
        setState(state.sort(( a, b ) => a.profile_link.localeCompare(b.profile_link)))
    else setState(state.sort(( a, b ) => b.profile_link.localeCompare(a.profile_link)))
    setCount({...count, sortByLink: count.sortByLink + 1})
}