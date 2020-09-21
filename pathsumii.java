//Java Solution

class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        dfs(root, sum, temp, result);
        
        return result;
    }
    
    public void dfs(TreeNode node, int sum, List<Integer> temp, List<List<Integer>> result) {
        if (node == null) {
            return;
        }
        
        temp.add(node.val);
        
        if (node.left == null && node.right == null && node.val == sum) {
            result.add(new ArrayList<>(temp));
        } else {
            dfs(node.left, sum - node.val, temp, result);
            dfs(node.right, sum - node.val, temp, result);
        }
        
        temp.remove(temp.size() - 1);
    }
}