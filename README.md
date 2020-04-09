### es6 设计模式 
---
#### Creational 
- Constructor模式  
可用于通过该函数定义的方法和属性实例化新对象  
- Factory 模式  
工厂模式是另一种基于类的创建模式。在此，我们提供了一个通用接口，该接口将对象实例化的责任委托给其子类。当我们需要管理或操作不同但具有许多相似特征的对象集合时，通常使用此模式  
- Prototype 模式  
JavaScript是基于原型链继承的  
- Singleton 模式  
是一种特殊的创新设计模式，其中只能存在一个类的实例。它是这样工作的-如果不存在单例类的实例，则创建并返回一个新实例，但是如果实例已经存在，则返回对现有实例的引用。
#### Structural  
- Adapter 模式  
这是一种结构模式，其中一类的接口转换为另一类。这种模式使类可以协同工作，否则由于接口不兼容而无法实现。这种模式通常用于为新的重构API创建包装器，以便其他现有的旧API仍可以使用它们。通常是在新的实现或代码重构（由于诸如性能提升之类的原因而完成）导致使用不同的公共API时，而系统的其他部分仍在使用旧的API，并且需要进行调整以共同工作时，才可以这样做。 
- Composite模式  
这是一种结构设计模式，它将对象组成树状结构以表示整个部分的层次结构。在这种模式下，树状结构中的每个节点可以是单个对象，也可以是对象的组合集合。无论如何，每个节点均得到统一处理。例如:链表，二叉树都会用的组合模式。  
- Decorator模式  
这也是一种结构设计模式，着重于动态地向现有类添加行为或功能的能力。这是子分类的另一种可行的替代方法。装饰器类型的行为很容易在JavaScript中实现，因为JavaScript允许我们动态地向对象添加方法和属性。最简单的方法是仅将属性添加到对象，但是将无法有效地重用它。例如:react高阶组件  
- Facade 模式  
这是一种结构设计模式，已在JavaScript库中广泛使用。它用于提供统一且更简单的面向公众的界面，以简化使用，从而避免其组成的子系统或子类的复杂性。  
- Flyweight 模式  
这是一种结构设计模式，致力于通过细粒度对象进行有效的数据共享。它用于效率和节省内存的目的。此模式可用于任何类型的缓存目的。实际上，现代浏览器使用了flyweight模式的变体来防止两次加载相同的图像。  
- Proxy 模式  
这是一种结构设计模式，其行为恰如其名。它充当另一个对象的代理或占位符，以控制对其的访问。它通常用于目标对象受约束且可能无法有效处理其所有职责的情况。在这种情况下，代理通常会为客户端提供相同的接口，并添加一个间接级别以支持对目标对象的受控访问，以避免对目标对象造成不必要的压力。例如：es6 Proxy和Reflect  
#### Behavioral  
- Chain of Responsibility 模式  
这是一种行为设计模式，它提供了一系列松散耦合的对象。这些对象中的每一个都可以选择操作或处理客户机的请求。责任链模式的一个很好的例子是DOM中的事件冒泡，其中一个事件通过一系列嵌套的DOM元素传播，其中一个元素可能附加了一个“eventlistener”来侦听和处理事件  
- Command 模式  
这是一种行为设计模式，旨在将动作或操作封装为对象。这种模式通过将请求操作或调用方法的对象与执行或处理实际实现的对象分离，允许系统和类的松散耦合。剪贴板交互API有点类似于命令模式。如果您是Redux用户，那么您已经遇到了命令模式。允许使用出色的时间旅行调试功能的操作不过是封装的操作，可以跟踪到重做或撤消操作。因此，时间旅行成为可能。 
- Iterator 模式 
它是一种行为设计模式，提供了一种在不暴露其底层表示的情况下连续访问聚合对象元素的方法。迭代器有一种特殊的行为，我们通过调用next（）一次一个地遍历一组有序的值，直到到达末尾。在ES6中引入生成器和迭代器使得迭代器模式的实现非常简单。  
- Mediator模式  
这是一种行为设计模式，封装了一组对象之间的交互方式。它通过促进松散耦合来提供一组对象的中央权限，从而防止对象之间显式地相互引用。 
- Observer模式  
这是一种至关重要的行为设计模式，它定义了对象之间的一对多依赖关系，以便当一个对象（发布者）更改其状态时，所有其他依赖对象（订阅者）都将得到通知并自动更新。这也称为PubSub（发布者/订阅者）或事件分发者/监听者模式。发布者有时被称为主题，订阅者有时被称为观察者。  
- State模式  
这是一种行为设计模式，它允许对象根据对其内部状态的更改来更改其行为。状态模式类返回的对象似乎更改了其类。它为一组有限的对象提供特定于状态的逻辑，其中每种对象类型代表一种特定的状态。  
- Strategy 模式  
这是一种行为设计模式，允许封装用于特定任务的替代算法。它定义了一系列算法，并以一种在运行时可以互换的方式封装它们，而不会受到客户端的干扰或了解。  
- Template 模式  
这是一种行为设计模式，基于定义算法或操作实现的框架，但是将某些步骤推迟到子类。它允许子类重新定义算法的某些步骤，而无需更改算法的外部结构。