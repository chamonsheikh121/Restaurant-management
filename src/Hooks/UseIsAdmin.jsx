import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuthContext from './UseAuthContext';

import UseAxiosPublic from './UseAxiosPublic';

const UseIsAdmin = () => {
    const { user, loading } = UseAuthContext();
    const axiosPublic = UseAxiosPublic()

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [`admin`, user?.email],
        enabled: !loading,
        queryFn: async () => {
            
            const res = await axiosPublic.get(`/api/v1/admin?email=${user?.email}`);
            return res?.data?.isAdmin
        }
    })

    return [isAdmin, isAdminLoading]
};

export default UseIsAdmin;