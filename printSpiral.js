module.exports = function printSpiral(A){
        const ans = [];
        let t=0 ,l = 0;
        let b = A.length - 1;
        let r = A[A.length-1].length-1;
        console.log(b,r)
        let dir = 0;
        while(l <= r && t <= b) {
            if(dir === 0) {
                for(let i=l; i<=r;i++){
                    ans.push(A[t][i])
                }
                t++;
                
            }else if(dir === 1) {
                for(let i=t; i<=b; i++){
                    ans.push(A[i][r]);
                }
                r--;
              
            }else if(dir===2){
                for(let i=r;i>=l;i--){
                    ans.push(A[b][i]);
                }
                b--;
               
            }else if(dir === 3){
                for(let i=b;i>=t;i--){
                    ans.push(A[i][l]);
                }
                l++;
              
            }
            dir = (dir+1)%4;
        }
        return ans;
    }