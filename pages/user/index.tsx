import Link from 'next/link';
import { useEffect, useState } from 'react';
import Dashboard from '../../components/authenticated/Dashboard';
import Layout from '../../components/layout';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading, router])

  const pageTitle = 'dashboard';
  
  return (
    <Layout page={pageTitle}>
      <div>
        {
          loading ?
            <div>
              <div>Loading....</div>
            </div> :
            <Dashboard user={authUser}></Dashboard>
        }
      </div>
    </Layout>
  )
}

export default LoggedIn;
