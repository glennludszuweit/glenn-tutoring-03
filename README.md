# CLASS Exercises 01
## Subscription Plan

1. Create program for a movie subscription, given the BasicPlan class bellow:

<pre><code>
class BasicPlan {
  constructor() {
    this.canStream = true;
    this.canDownload = true;
    this.numOfDevices = 1;
    this.hasSD = true;
    this.hasHD = false;
    this.hasUHD = false;
    this.price = '$8.99';
  }
}
</code></pre>

2. extend the BasicPlan to include numOfDevices to 2, hasHD to true and price to $10.99 in StandardPlan

3. extend it to PremiumPlan to include numOfDevices to 4, hasUHD to true and price to $14.99.

4. colsole.log() an instance of each plan.


# CLASS Exercises 02
## Score Comparison

1. Create a Person class that accepts 2 parameters (name and score).

2. In this class create a function that will compare the scores of the Person intances.

3. if the Person's score is lower than the other return 'this.name score is smaller than this.name'

4. if the Person's score is higher than the other return 'this.name score is higher than this.name'

5. if they have the same score return 'this.name score is equal to this.name'
