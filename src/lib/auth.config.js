
export const authConfig = {
    pages:{
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
              token.isAdmin = user.isAdmin;
            }
            return token;
          },
          async session ({ session, token }) {
            if(token){

              session.user.id = token.id;
              session.user.isAdmin = token.isAdmin;
            }
            return session;
          },
          authorized({ auth, request }){
            debugger;
            const user = auth?.user;
            const isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            
            // ONLY ADMIN CAN REACH THE ADMIN PAGE
      
            if (isOnAdminPage && !user?.isAdmin){
              return false;
            }
      
            // only authenticated users can access the blog page
      
            if (isOnBlogPage && !user){
              return false;
            }
      
            //unauthenticated users to be redirected to login page
            if(isOnLoginPage && user){
              return Response.redirect(new URL("/", request.nextUrl));
            }
      
            return true;
      
          },
    },
};