### 持续集成      
- daily build：每天晚上全局build一次    
- BVT：build verification test，属于一种冒烟测试    

### 规则校验       
- 通过Git Hook来完成检查   
- ESLint：轻量级代码检查方案    
- PhantomJS（Deprecated）：基于无头浏览器对代码最后生成出来的样子，做一些规则的校验和检查    
- Chrome Headless模式 - puppeteer库    

### 采用一种更轻量级的检查方式：    
- lint：对代码风格和一些常见的代码模式做一些校验 如果想要做比较完整的测试，可以使用PhantomJS无头浏览器进行测试    
