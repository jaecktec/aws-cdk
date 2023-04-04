"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
const app = new aws_cdk_lib_1.App();
const stack = new aws_cdk_lib_1.Stack(app, 'integ-iam-role-1');
const g1 = new aws_iam_1.Group(stack, 'MyGroup');
const g2 = new aws_iam_1.Group(stack, 'YourGroup');
for (let i = 0; i < 5; ++i) {
    const user = new aws_iam_1.User(stack, `User${i + 1}`);
    user.addToGroup(g1);
    g2.addUser(user);
}
const policy = new aws_iam_1.Policy(stack, 'MyPolicy');
policy.attachToGroup(g1);
policy.addStatements(new aws_iam_1.PolicyStatement({
    resources: [g2.groupArn],
    actions: ['iam:*'],
}));
new integ_tests_alpha_1.IntegTest(app, 'iam-role-test', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcudXNlcnMtYW5kLWdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLnVzZXJzLWFuZC1ncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBeUM7QUFDekMsa0VBQXVEO0FBQ3ZELGlEQUEyRTtBQUUzRSxNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQztBQUV0QixNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFakQsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBSyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztBQUV6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0lBQzFCLE1BQU0sSUFBSSxHQUFHLElBQUksY0FBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNsQjtBQUVELE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDN0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6QixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQWUsQ0FBQztJQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ3hCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztDQUNuQixDQUFDLENBQUMsQ0FBQztBQUVKLElBQUksNkJBQVMsQ0FBQyxHQUFHLEVBQUUsZUFBZSxFQUFFO0lBQ2xDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUNuQixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIFN0YWNrIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgSW50ZWdUZXN0IH0gZnJvbSAnQGF3cy1jZGsvaW50ZWctdGVzdHMtYWxwaGEnO1xuaW1wb3J0IHsgR3JvdXAsIFBvbGljeSwgUG9saWN5U3RhdGVtZW50LCBVc2VyIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWlhbSc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2soYXBwLCAnaW50ZWctaWFtLXJvbGUtMScpO1xuXG5jb25zdCBnMSA9IG5ldyBHcm91cChzdGFjaywgJ015R3JvdXAnKTtcbmNvbnN0IGcyID0gbmV3IEdyb3VwKHN0YWNrLCAnWW91ckdyb3VwJyk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgNTsgKytpKSB7XG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihzdGFjaywgYFVzZXIke2kgKyAxfWApO1xuICB1c2VyLmFkZFRvR3JvdXAoZzEpO1xuICBnMi5hZGRVc2VyKHVzZXIpO1xufVxuXG5jb25zdCBwb2xpY3kgPSBuZXcgUG9saWN5KHN0YWNrLCAnTXlQb2xpY3knKTtcbnBvbGljeS5hdHRhY2hUb0dyb3VwKGcxKTtcbnBvbGljeS5hZGRTdGF0ZW1lbnRzKG5ldyBQb2xpY3lTdGF0ZW1lbnQoe1xuICByZXNvdXJjZXM6IFtnMi5ncm91cEFybl0sXG4gIGFjdGlvbnM6IFsnaWFtOionXSxcbn0pKTtcblxubmV3IEludGVnVGVzdChhcHAsICdpYW0tcm9sZS10ZXN0Jywge1xuICB0ZXN0Q2FzZXM6IFtzdGFja10sXG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=