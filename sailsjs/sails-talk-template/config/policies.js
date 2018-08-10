/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/

  // '*': true,
  // UserController: {
  //   findOne: ['is-logged-in']
  // },
  // TodoController: {
  //   findOne: ['is-logged-in']
  // },
  // 'user/*': ['is-logged-in'],
  // 'user/create': true, // ['is-logged-out'],
  // 'user/login': true,
  // 'todo/*': ['is-logged-in'],
};
